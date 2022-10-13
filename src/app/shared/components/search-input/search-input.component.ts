import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { DEBOUNCE_TIME } from '@shared/utils/constants';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
    searchControl = new FormControl('');

    @Output() searchChange = this.searchControl.valueChanges.pipe(debounceTime(DEBOUNCE_TIME));

    clear(): void {
        this.searchControl.setValue('');
    }
}
