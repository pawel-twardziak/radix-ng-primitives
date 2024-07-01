import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
    NgDocNavbarComponent,
    NgDocRootComponent,
    NgDocSidebarComponent,
    NgDocThemeToggleComponent
} from '@ng-doc/app';
import {
    NgDocButtonIconComponent,
    NgDocIconComponent,
    NgDocTooltipDirective
} from '@ng-doc/ui-kit';

import { ThemeSwitcherComponent } from './ui/theme-switcher/theme-switcher.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        NgDocRootComponent,
        RouterOutlet,
        NgDocNavbarComponent,
        NgDocSidebarComponent,
        NgDocButtonIconComponent,
        NgDocTooltipDirective,
        NgDocThemeToggleComponent,
        NgDocIconComponent,

        ThemeSwitcherComponent
    ],
    template: `
        <ng-doc-root>
            <ng-doc-navbar
                class="bg-background sticky top-0 z-20"
                [leftContent]="leftContent"
                [rightContent]="rightContent"
            >
                <ng-template #leftContent>
                    <h3 style="margin: 0">shadcn/ui</h3>
                </ng-template>
                <ng-template #rightContent>
                    <div class="flex gap-4">
                        <app-doc-theme-toggle />
                        <a
                            href="https://github.com/radix-ng/primitives"
                            ng-doc-button-icon
                            ngDocTooltip="Repository on GitHub"
                            size="large"
                            target="_blank"
                        >
                            <ng-doc-icon [size]="24" customIcon="github"></ng-doc-icon>
                        </a>
                    </div>
                </ng-template>
            </ng-doc-navbar>
            <ng-doc-sidebar></ng-doc-sidebar>
            <router-outlet></router-outlet>
        </ng-doc-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
