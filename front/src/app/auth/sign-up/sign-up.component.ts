import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        });
    }

    register() {
        console.log('login', this.form.value);
    }
}
