import {Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'y-button',
    styleUrl: 'button.css',
    shadow: true,
})
export class Button {
    @Prop() variant: 'primary' | 'destructive' | 'outline' | 'secondary' | 'link' = 'primary';
    @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

    private getButtonClasses() {
        const baseClasses = 'px-4 py-2 rounded focus:outline-none transition-colors';
        const variantClasses = {
            primary: 'bg-blue-500 text-white hover:bg-blue-600',
            destructive: 'bg-red-500 text-white hover:bg-red-600',
            outline: 'border border-gray-500 text-gray-700 hover:bg-gray-100',
            secondary: 'bg-gray-500 text-white hover:bg-gray-600',
            link: 'text-blue-500 hover:underline',
        };
        const sizeClasses = {
            sm: 'text-sm py-1 px-2',
            md: 'text-base py-2 px-4',
            lg: 'text-lg py-3 px-6',
            xl: 'text-xl py-4 px-8',
        };

        return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]}`;
    }

    render() {
        return (
            <button class={this.getButtonClasses()}>
                <slot></slot>
            </button>
        );
    }
}
