import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

export const routes: Routes = [

    {title: "DB | Home", path:'' , component: HeaderComponent},
    {title: "DB | Home", path:'home' , component: HeaderComponent},
    {title: "DB | About", path:'about' , component: AboutComponent},
    {title: "DB | Projects", path:'projects' , component: ProjectsComponent},
    {title: "DB | Certifications", path:'certifications' , component: CertificationsComponent},
    {title: "DB | Not Found", path:'**' , component: NotfoundComponent},
    
];  
