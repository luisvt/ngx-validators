import { Validator } from './../items';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { universal } from '../items';


@Component({
    selector: 'universal-validator',
    templateUrl: './universal-validator.component.html'
})
export class UniversalValidatorComponent implements OnInit, OnDestroy {


    private sub: any;
    universalItems = universal;
    item: string = this.universalItems[0].name;
    currentValidator: Validator;
    selected = 'reactiveForm';

    constructor(private route: ActivatedRoute) { }


    ngOnInit() {
        this.currentValidator = this.universalItems.filter(x => x.name === this.item)[0];
        this.sub = this.route.params.subscribe(params => {
            this.item = params.id;
            if (this.item) {
                this.currentValidator = this.universalItems.filter(x => x.name === this.item)[0];
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
