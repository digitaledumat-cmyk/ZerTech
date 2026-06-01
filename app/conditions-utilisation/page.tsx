import { createLegalPage } from '@/lib/create-legal-page';
import { ROUTES } from '@/lib/routes';

const page = createLegalPage(ROUTES.conditions);
export const generateMetadata = page.generateMetadata;
export default page.default;
