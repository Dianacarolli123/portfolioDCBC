import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

export const routes: Routes = [

    {title: "ADS | Home", path:'' , component: HeaderComponent},
    {title: "ADS | Home", path:'home' , component: HeaderComponent},
    {title: "ADS | About", path:'about' , component: AboutComponent},
    {title: "ADS | Projects", path:'projects' , component: ProjectsComponent},
    {title: "ADS | Certifications", path:'certifications' , component: CertificationsComponent},
    {title: "ADS | Not Found", path:'**' , component: NotfoundComponent},
    
];  
