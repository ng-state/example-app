import { AppComponent } from './components/app';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterHistoryTestComponent } from './components/router-history-test.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ng-state/store';
import { TodoDescription } from './components/todo-description.component';
import { TodosComponent } from './components/todos.component';
import { routes } from './routes';
import { ProductsComponent } from './components/products/products.component';
import { FiltersComponent } from './components/products/filters/filters.component';
import { StorageTestComponent } from './components/storage-test.component';
import { initialState } from '../initial-state';
import { ImmerDataStrategyModule } from '@ng-state/immer-data-strategy';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.provideStore(initialState, false, {
            debugger: {
                enableInitialDebugging: true,
                options: {
                    enableConsoleOutput: false
                }
            },
            history: {
                storeHistoryItems: 50
            }
        }),
        ImmerDataStrategyModule
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        TodoDescription,
        RouterHistoryTestComponent,
        ProductsComponent,
        FiltersComponent,
        StorageTestComponent
    ]
})
export class ImmerAppModule {
}