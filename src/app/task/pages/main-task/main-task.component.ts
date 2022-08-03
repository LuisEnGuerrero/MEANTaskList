import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {

  tasks: Array<any> = [];
  user: any;
  miFormulario: FormGroup = this.formBuilder.group({
    newTask: [''],
  });

  constructor(private crudService: CrudService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.crudService.read().subscribe( (res) => {
      this.tasks = res.tasks;
    });
  }

  create() {
    this.router.navigateByUrl(`/task/new`);
  };

  update(task: any) {
    const {_id, title, detail} = task;

    this.router.navigateByUrl(`/task/${_id}/${title}/${detail}`)
  };

  delete(id: string) {
    this.crudService.delete(id).subscribe( (response) => {
      this.crudService.read().subscribe( (res) => {
        this.tasks = res.tasks;
      });
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
