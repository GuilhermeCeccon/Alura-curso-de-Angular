import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.valiator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    SignupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService
    ) { }
    ngOnInit(): void {
        this.SignupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            userName: ['', [Validators.required, Validators.minLength(2), lowerCaseValidator, Validators.maxLength(40)], this.userNotTakenValidatorService.checkUserNameTaken()],
            fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
        })
    }
}