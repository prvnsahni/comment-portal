import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  { path: "profiles", component: ProfilesComponent  },
  { path: "home", component: HomeComponent  },
  { path: "**", redirectTo: "/home", pathMatch: "full"  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
