import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  tasks: Array<any> = [];
  user: any;
  miFormulario: FormGroup = this.formBuilder.group({
    newTask: [''], detail: [''],
  });

  constructor(private crudService: CrudService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.crudService.read().subscribe( (res) => {
      this.tasks = res.tasks;
    });
  }

  create() {
    this.crudService.create(this.miFormulario.value.newTask, this.miFormulario.value.detail).subscribe( (response) => {
      this.miFormulario.reset();
      
      this.crudService.read().subscribe( (res) => {
        this.tasks = res.tasks;
      });
    });
    this.router.navigateByUrl(`/task/list`);
  };
}
