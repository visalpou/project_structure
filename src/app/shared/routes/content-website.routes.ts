import { Routes } from '@angular/router';

export const WEBSITE_ROUTES: Routes = [
    {
        path: "",
        loadChildren: () => import("../../pages/website/website.module").then(m => m.WebsiteModule)
    }
];