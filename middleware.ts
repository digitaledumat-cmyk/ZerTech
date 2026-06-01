import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Exclure les fichiers publics et assets
  if (
    pathname.includes('.') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // Vérifier si la langue est déjà présente dans l'URL
  const hasLocale =
    pathname.startsWith('/fr') ||
    pathname.startsWith('/es') ||
    pathname.startsWith('/ar');

  if (!hasLocale) {
    // Récupérer le header de langue du navigateur ou de la localisation DNS
    const acceptLanguage = request.headers.get('accept-language') || '';
    const country = request.headers.get('x-vercel-ip-country') || '';

    let locale = 'fr'; // Par défaut

    if (acceptLanguage.includes('es') || country === 'ES') {
      locale = 'es';
    } else if (acceptLanguage.includes('ar') || country === 'MA') {
      // Optionnel pour le Maroc ou si l'arabe est détecté, mais FR reste prioritaire comme demandé
      locale = 'fr';
    }

    // Rediriger vers la langue appropriée
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
