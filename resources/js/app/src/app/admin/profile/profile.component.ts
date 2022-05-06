import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';

import { ProfileService } from 'src/app/services/profile.servise';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: []
})
export class ProfileComponent implements OnInit {

    user: User = {
        id: null,
        company_id: null,
        nick: '',
        first_name: '',
        last_name: '',
        full_name: '',
        dni: '',
        address: '',
        phone: '',
        email: '',
        role_name: ''
    };

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        this.profileService.getProfile()
            .subscribe(response => {
                this.user = response.data;
            })
    }

}
