import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VideoCatalogService} from '../video-catalog/services/video-catalog.service';
import {UploadEvent} from 'ngx-file-drop';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  form: FormGroup;
  progressWidth = 0;
  informationArray = [
    {
      name: 'a',
      age: 21,
      action: 'boom'
    }, {
    name: 'b',
      age: 2,
      action: 'kaboom'
    }, {
    name: 'h',
      age: 56,
      action: 'kababoom'
    }
  ];
  constructor(
    private _fb: FormBuilder,
    private _service: VideoCatalogService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('sessionToken', 'zQ94UKDjUC87YbQB5AS5ogfoZDNw6f9fUbEtocWNedEB0tLyI6l' +
      'Cy316BiKUeQ5gqtpg22rWsTfBakd0B+yBb5z43mS7HcP2+5DUS07CdEJc1HlnNWn0vxh6Ib8YQb2eJODgiD9VO7bAMgpEfksXDdfkuUpR' +
      'FyL5tNln5dMNt+Z6fsLpUgtWVMrCn6MiJ71xXI6+c2yxm04bYPeGP7UTdepNPuEV1B7uRfK9n4oU/5PAAqaBIITaXxfvfGnas46ANsCC+WK1CGUCDXEYnZFGNi7/' +
      'KqprWRiQkCrwfc/igNfcvrGd/zkmo+iqs+qC0WMTcaSM+yb6tYf32ruVMZi8bncYPzyTT6PqkuX2dyCpDFML2iinfGRYxgj/' +
      'L6tanZ4/HVOLxRyfetE3Qcot25HRv+GcNYSuG1EJB5SlSMBYhHPqA1bXXXeq6+KjBYySHJljsiPXZL3VD8NB+tJQY7KcxNb1vL/L7' +
      'u9SLHz26SiSpRDW4yPUpxWaEupc95cr2DCOEebwCGrSuqAOO9kCu/7GvRYLacb2KU3lCcajRo+Vwj0MtQz8MWvGmKxZ7dlHpR2e8XlUhO' +
      'nSGLnx6quMCsI1EX4rRMMoGoxZKewFMiiEQncw6lEjxubA83mPVfJYbvojS19GlrTC3uvTtHoBluL+R5zs/+RqI6bcKVGE/Mkjp' +
      'r1Xj55Ta4WN3at8PjsPiOdE2UFxJNCupWfSbSdRu+NxCJR89RKAp1ZkF778Drod9aAcFftQ72OYE/+YQApEzYQcjWgGdAIRP' +
      'k5I2R0uuxtgSbm9VBiUbO369F7SLFrvYjrPAK6a1U658R3r6x+3SDFe92r8ThHP4SeY/LlAyOS5SZxikuE+BW5YaAxurlw' +
      'ShLSkimZO+B/iVSRCyfHdfCXvTc31LB1JKujIFbhfuf4bjhZ6sOX417zqEyPdK1UyD3aQvBzx7VfY2vzz405Jecpd');
    this.form = this._fb.group({
      file: ['']
    });
  }
  loadFile(event) {
    const file = event.target.files[0];

    const formData = new FormData();

    const blob = new Blob([file], { type: 'text/xml'});

    formData.append('file', blob);

    const request = new XMLHttpRequest();
    request.open('POST', this._service.apiUrl);
    request.upload.onprogress = (evt) => this.updateProcess(evt);
    request.setRequestHeader('SessionToken', this._service.sessionToken);
    request.send(formData);
  }
  updateProcess(evt) {
    if (evt.lengthComputable) {
      this.progressWidth = (evt.loaded / evt.total) * 100;
    }
  }
  stringifyWidth() {
    return String(this.progressWidth) + '%';
  }
  preventDefaultAction(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  allowDrop(ev) {
    this.preventDefaultAction(ev);
  }

  dropFile(ev: UploadEvent) {
    const files = ev.files; // empty list
    console.log(ev);
      this.loadFile(files[0]);
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  sortingBy(value: string) {
    this.informationArray.sort((a, b) => this.compare(a, b, value));
  }

  compare(a, b, value) {
    if (a[value] < b[value]) {
      return -1;
    }
    if (a[value] > b[value]) {
      return 1;
    }
    return 0;
  }

}
