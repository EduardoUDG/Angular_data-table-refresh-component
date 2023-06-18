import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../interface/user.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, OnChanges {

  @Input()
  public users: User[] = [];

  public displayedColumns: string[] = ['id', 'fullName', 'email', 'address'];
  public dataSource = new MatTableDataSource<User>;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource( this.users );
  }

  ngOnChanges(changes: SimpleChanges) {
    if( (changes as any).users ) { // if this.users has changes update data table
      this.dataSource.data = this.users;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
