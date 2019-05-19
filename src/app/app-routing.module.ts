import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './root-components/not-found/not-found.component';
import { ComposeMessageComponent } from './root-components/compose-message/compose-message.component';
import { MessengerComponent } from './root-components/messenger/messenger.component';
import { AuthGuard } from './auth-module/guards/auth.guard';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

const routes: Routes = [
  { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },

  
  { path: 'admin', canLoad:[AuthGuard], loadChildren: './admin-module/admin.module#AdminModule' },
  { path: 'crisis-center', canLoad: [AuthGuard], loadChildren: './crisis-center-module/crisis-center-module.module#CrisisCenterModule'},
  // data: { preload: true },
  // data: {} -> Напомним, что вы можете добавить что угодно к dataсвойству маршрута.

  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' }, // add object in ->  outlets: {popup: null} ete ira router-outlet i name i dem@ drvuma ira routi path -@: 'compose' -@ bacvuma ete path@ jnjumenq pakvuma (ankaxa arajnayin navigacyaayic)
  { path: 'chat', component: MessengerComponent, outlet: 'popup' },

  // { path: 'chat', component: MessengerComponent, outlet: 'chatPopup' }, // arandzin popup ankax compose u 3 ayin rout  http://localhost:4200/heroes-list(popup:compose//chatPopup: chat)
  { path: '**', component: NotFoundComponent },
];

/**
 * @description ->    / nasnakauma amenasvtuc
 * @description ->   ./ current routLink + 'new path'
 * @description ->  ../ 1 level to up ^ + 'new path'  (parametrnela hamatvum level)
 * templatum karancq cnshenq  relativeTo: acRout    bayc ts um anpaymna vor imana vordexa gtnvum et pahin
 * 
 * 
 * Каждая вторичная outlet имеет собственную навигацию, независимую от навигации, ведущей в первичную outlet.
 * Изменение текущего маршрута, отображаемого в первичной outlet, не влияет на вторичный всплываюшый outlet.
 * Маршрутизатор отслеживает две отдельные ветви в дереве навигации и генерирует представление этого дерева в URL.
 * 
 * <a [routerLink]="[ {outlets: { primary: ['heroes-list'], popupTwo: ['two'] }} ]">app-routing and for example side bar</a>
 * parameter - [routerLink]="[{ outlets: { popup: ['chat',5, {name:'davo'} ] } }]" 
 * many outlets by names - ka menak 1 hat ananun < router-outlet>  et himnakanna u ka 2 ayin outletner (1- popup: patName// 2- popupTwo: 'patName.... ) ete outleti anun@ tarbera urem kaxvac ci vosmi rouuterLinki popoxutyan het 
 * @description component u routing modul@ karan elnen urish modulum bayc routerLink ov  bacel u pakel@ pipti appi mejic elni vortev menak appuma outlets: { popupTwo} hasaneli 
 
    Они независимы друг от друга.
    Они работают в сочетании с другими маршрутами.
    Они отображаются в названных outlet.





    https://www.techiediaries.com/angular-router-multiple-outlets/
    https://blog.angular-university.io/angular2-router/
 */


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preloadingStrategy: SelectivePreloadingStrategyService, 
    /*
    >> preloadingStrategy: PreloadAllModules <<
     Это говорит Routerп релоадеру немедленно загружать все ленивые загруженные маршруты (маршруты со loadChildrenсвойством).
     Вы добавили CanLoad охрану к маршруту в AdminModule нескольких шагах назад, чтобы заблокировать загрузку этого модуля, 
     пока пользователь не авторизуется. Этот CanLoad охранник имеет приоритет над стратегией предварительной загрузки.
     Если вы хотите предварительно загрузить модуль и защититься от несанкционированного доступа, 
     отбросьте guard canLoad() метод защиты и положитесь только на защиту canActivate() guard.
  */
    //  enableTracing: true, // <-- debugging purposes only
    })],

  exports: [RouterModule]
})
export class AppRoutingModule { }


// Маршрутизатор отслеживает две отдельные ветви в дереве навигации и генерирует представление этого дерева в URL.
// Вы можете добавить еще много точек и маршрутов на верхнем уровне и во вложенных уровнях, создавая дерево навигации с множеством ветвей. Маршрутизатор сгенерирует URL, чтобы пойти с ним.
/*
https://www.youtube.com/watch?v=3-uCkoYbx84&list=PLtULzFUr0kI5C02AxrDGP7KQ3Qeuze5y2&index=17
https://webdraftt.com/tutorial/angular-routing-basics
https://blog.angularindepth.com/angular-router-series-pillar-2-navigation-d050286bf4fa
https://blog.angularindepth.com/the-three-pillars-of-angular-routing-angular-router-series-introduction-fb34e4e8758e
https://vsavkin.tumblr.com/post/146722301646/angular-router-empty-paths-componentless-routes
*/