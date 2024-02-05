import { Component, OnInit, inject } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { BookService } from '../../books/services/book.service'
import { Book } from '../../books/models/book.model';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
  topBooks: Book[] = [];
  private _titleService = inject(Title)
  private bookService= inject(BookService)


  constructor() {
    this._titleService.setTitle('Dashboard')
  }

  ngOnInit() {
    this.bookService.getTopBooks(3).subscribe(books => {
      this.topBooks = books;
    });

    this.bookService.getTopBooks(10).subscribe(booksData => {
      const books = booksData
      this.barChartData.labels = books.map(book => book.title);
      this.barChartData.datasets = [{
        label: 'Ventas',
        data: books.map(book => book.salesCount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)' 
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }];
    })
  }


  getRankItemClass(index: number): string {
    switch (index) {
      case 0:
        return 'gold';
      case 1:
        return 'silver';
      case 2:
        return 'bronze';
      default:
        return '';
    }
  }
}
