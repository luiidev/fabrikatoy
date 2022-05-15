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
        full_name: '',
        phone: '',
        email: '',
        role_name: '',
        image: '',
    };

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        this.profileService.getProfile()
            .subscribe(response => {
                this.user = response.data;
            })
    }

}
