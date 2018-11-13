import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VideoCatalogService} from '../video-catalog/services/video-catalog.service';
import {UploadEvent} from 'ngx-file-drop';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  token: string;
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
    private _service: VideoCatalogService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    sessionStorage.setItem('sessionToken', 'mBeL71uYKHXYyfx1fgY24uT49P9nhB8SN43UEc5Jc8a6W1cRXxDJ9dCmAIws218VivPkv5rF/et3BNGmcgzeCCOBm' +
      'z+xqohhjNdt2Lv2iXoLEzVUO8fIwYOBxoJgIAnGYmopTnS4EMbW7wpphrMCfr8jELG8l1cAxB03X3iJdDezW8V2vDJ211JyzijXTZ+g7ubHhjyZAXs7xD1v' +
      'rnUdny8o5bEmMIeyp3r1oONjuYmqp9kX4uU8z+KgRBDYoZXiTL6mHpyKerp6QtNVB2IEVuHt11P1V8ImfxFcrCaejuMafNGuU4j7Jwt+wnwRUL7FxqY' +
      '8DO5OQwrarPJzwWma9hYWHfVYNRu4zCIA8lKzALyzvdyc1AWQODSaSlF3YMdEshpJu79xfKHTDz3uKFNd39jcustGU9oJoEopiPbCanGVePfc+hOY/' +
      'zDDdwMmHFObwjCm68AtUxbQtXs6lknys0CXltRa0O8g2NmpYDqB8W+fLsyKB2SjIy6Hd+XuOw2hGAC9EByLkLv6HyLf8vAD4Yo4iktBwUpGYSNPGc' +
      'vCCxf361JF0JwFdhJbsEFxUKeHEvZ0U/0HHXb5cdD2/ykn7WWSdUOoDxgcqzMUus7+zs/4tRvAxIdtZ1/dzMqTmtoU2ae4RlFirpyl5Igc+OJLcFs' +
      'UvtiXJWehKQofS4iq8asXqMXA47W7D+BCOvJxt2E6BCXeV0cvmbO/fwIb9i8hm9u6R+xAaOzl3+o45KWKvFY6muwNwqJw8+IyL96SI9n1Mtex+bP' +
      'QuZgj+a91uY5hrcR72dC671EdUVzEr8NKicCDCxKI0bEEcUmVYZjAW5z7yv7F5grczj8JSYCAJ6R23pfl05i2fJj08dddO/v5gpp6RwvNMZ/YQEd' +
      'iWMI6w1phvp570KMYmCURYxvqmOZQ6dtftFdNIL4p53wHlUK0lwSmcXkEYWda3/whtSJJF7YZ');
    this.form = this._fb.group({
      file: ['']
    });
  }
  loadFile(event) {
    this.preventDefaultAction(event);
    const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];

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

  // dropFile(ev: DragEvent) {
  //   const files = ev.dataTransfer.files;
  //
  //   this.loadFile(ev);
  // }

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

  backToListManager() {
    this._router.navigate(['/list-manager']);
  }
}
