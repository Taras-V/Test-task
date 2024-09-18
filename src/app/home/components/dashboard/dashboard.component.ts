import { Component } from '@angular/core';
import { DashboardType, IDashboardElements } from '../../interface/dashboard-interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

 public dashboardItems: IDashboardElements[];

  constructor() {
    this.dashboardItems = [
      {
        title: 'Go Shopping',
        subtitle: 'Shopping points',
        points: '1,124',
        type: DashboardType.point,
        bgImage: '/assets/image/shoppingTile_2.png',
      },
      {
        title: 'My budget',
        subtitle: 'Points to give',
        points: '1,932',
        type: DashboardType.point,
        bgImage: '/assets/image/budgetTile_3.png',
      },
      {
        title: 'My badges',
        icon: '/assets/icon/badgesTile_4.png',
        type: DashboardType.icon,
        bgImage: '/assets/image/badgesTile_5.png',
      },
      {
        title: 'My Awards',
        icon: '/assets/icon/awardsTile_6.png',
        type: DashboardType.icon,
        bgImage: '/assets/image/awardsTile_7.png',
      },
      {
        title: 'Quizzes',
        icon: '/assets/icon/quizzesTile_8.png',
        type: DashboardType.icon,
        bgImage: '/assets/image/quizzesTile_9.png',
      },
      {
        title: 'Redeem On-The-Spot Award',
        type: DashboardType.input,
        bgImage: '/assets/image/bg_11.png',
      },
    ]
  }

}
