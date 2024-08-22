import { cva } from 'class-variance-authority';

export const dropdownMenuContentVariants = cva(
    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
);

export const dropdownMenuSubContentVariants = cva(
    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
);

export const dropdownMenuLabelVariants = cva('flex px-2 py-1.5 text-sm font-semibold', {
    variants: {
        inset: { true: 'pl-8', false: '' }
    },
    defaultVariants: {
        inset: false
    }
});

export const dropdownMenuItemVariants = cva(
    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    {
        variants: {
            inset: { true: 'pl-8', false: '' }
        },
        defaultVariants: {
            inset: false
        }
    }
);

export const dropdownMenuSeparatorVariants = cva('flex -mx-1 my-1 h-px bg-muted');

export const dropdownMenuShortcutVariants = cva('flex ml-auto text-xs tracking-widest opacity-60');

export const dropdownMenuCheckboxItemVariants = cva(
    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
);

export const dropdownMenuRadioItemVariants = cva(
    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
);