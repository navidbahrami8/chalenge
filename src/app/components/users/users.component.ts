import {Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, AfterViewInit, ViewChild} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {selectUsers} from "./+store/users.selectors";
import {getUsers} from "./+store/users.actions";
import {usersArray, UsersData} from "./+store/users.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSelectChange} from "@angular/material/select";
import {DateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  Users$!: Observable<any>
  dataSource: any;
  usersData!: UsersData
  usersArray!: usersArray[]
  destroy$ = new Subject();
  displayedColumns: string[] = ['no', 'name', 'family', 'age', 'phone', 'gender', 'email', 'eyeColor', 'birthDate'];
  selectedAge: string[] = ['smaller', 'greater', 'equal'];
  searchText: any;
  male = false;
  female = false;
  others = false;
  selectAge: any;

  constructor(public store: Store<any>, private ref: ChangeDetectorRef, private dateAdapter: DateAdapter<Date>, private datePipe: DatePipe) {
    this.dateAdapter.setLocale('en-GB');
  }

  async ngOnInit() {
    await this.store.dispatch(getUsers())
    this.Users$ = await this.store.select(selectUsers)
    await this.initUsers()

  }

  initUsers() {
    this.Users$.subscribe(async (res: UsersData) => {
      this.usersData = await res
      this.usersArray = await res?.users
      this.dataSource = new MatTableDataSource(await res?.users);
      this.ngAfterViewInit()
    })
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    this.ref.detectChanges()
  }

  applyFilterByFirstName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      let filter = this.usersArray.filter((x: any) => x.firstName == filterValue)
      this.dataSource = new MatTableDataSource(filter);
      // this.dataSource.filter = filterValue.trim().toLowerCase(); <----filter all  data
    } else {
      this.initUsers()
    }
  }

  applyFilterByLastName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      let filter = this.usersArray.filter((x: any) => x.lastName == filterValue)
      this.dataSource = new MatTableDataSource(filter);
    } else {
      this.initUsers()
    }
  }

  readonly: boolean = true
  type!: string
  gender: string[] = ['male', 'female', 'other']
  eyeColor: string[] = ['Green', 'Brown', 'Gray']

  getSelectedAge($event: MatSelectChange) {
    this.readonly = false
    this.type = $event.value
  }

  applyFilterByAge($event: Event) {
    const filterValue = ($event.target as HTMLInputElement).value;
    console.log(filterValue)
    if (filterValue) {
      switch (this.type) {
        case 'smaller':
          let filterSmaller = this.usersArray.filter((x: any) => x.age <= +filterValue)
          this.dataSource = new MatTableDataSource(filterSmaller);
          this.ngAfterViewInit()
          return this.dataSource
        case 'greater':
          let filterGreater = this.usersArray.filter((x: any) => x.age >= +filterValue)
          this.dataSource = new MatTableDataSource(filterGreater);
          this.ngAfterViewInit()
          return this.dataSource
        case 'equal':
          let filterEqual = this.usersArray.filter((x: any) => x.age == +filterValue)
          this.dataSource = new MatTableDataSource(filterEqual);
          this.ngAfterViewInit()
          return this.dataSource
      }
    } else {
      return this.initUsers()
    }

  }

  arrayAge: string [] = []

  selectedGender($event: any, item: string) {
    if (item && $event.checked) {
      this.arrayAge.push(item)
      let filterSmaller = this.dataFilterAge()
      this.dataSource = new MatTableDataSource(filterSmaller);
    } else {
      const index = this.arrayAge.indexOf(item, 0);
      if (index > -1) {
        this.arrayAge.splice(index, 1);
      }
      let filterSmaller = this.dataFilterAge()
      this.dataSource = new MatTableDataSource(filterSmaller);
    }
    this.arrayAge === undefined || this.arrayAge.length == 0 ? this.initUsers() : null
  }

  dataFilterAge() {
    return this.usersArray.filter((x: any) => (this.arrayAge.some(x => x == 'male') ? x.gender == 'male' : null) || (this.arrayAge.some(x => x == 'female') ? x.gender == 'female' : null) || (this.arrayAge.some(x => x == 'other') ? x.gender == 'other' : null))
  }

  arrayColor: string [] = []

  selectedEyeColor($event: any, item: string) {
    // 'Green', 'Brown', 'Gray'
    if (item && $event.checked) {
      this.arrayColor.push(item)
      let filterSmaller = this.getFilterEyeColor()
      this.dataSource = new MatTableDataSource(filterSmaller);
    } else {
      const index = this.arrayColor.indexOf(item, 0);
      if (index > -1) {
        this.arrayColor.splice(index, 1);
      }
      let filterSmaller = this.getFilterEyeColor()
      this.dataSource = new MatTableDataSource(filterSmaller);
    }
    this.arrayColor === undefined || this.arrayColor.length == 0 ? this.initUsers() : null
  }

  getFilterEyeColor() {
    return this.usersArray.filter((x: any) => (this.arrayColor.some(x => x == 'Green') ? x.eyeColor == 'Green' : null) || (this.arrayColor.some(x => x == 'Brown') ? x.eyeColor == 'Brown' : null) || (this.arrayColor.some(x => x == 'Gray') ? x.eyeColor == 'Gray' : null))

  }

  selectedDate($event: any) {
    let date = this.datePipe.transform(new Date(($event.target as HTMLInputElement).value).toISOString(), 'yyyy-MM-dd');
    console.log(date, 'date')
    const filterValue = date
    if (filterValue) {
      let filter = this.usersArray.filter((x: any) => x.birthDate == filterValue)
      this.dataSource = new MatTableDataSource(filter);
    } else {
      this.initUsers()
    }
  }
}
