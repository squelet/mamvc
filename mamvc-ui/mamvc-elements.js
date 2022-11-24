import {to, span, toggle, div, on, boolean, when, falseTo} from "../mamvc.js";

export function expander(model, enabled = boolean(true)) {
    return span().display('inline-block').cursor('pointer')
        .transition('transform .2s ease-in-out').transform(model.map(to('rotate(90deg)')))
        .color(enabled.map(falseTo('silver')))
        .add('\u25B6')
        .onClick(when(enabled, toggle(model)))
}

export function hbar(valueModel, className = 'progress') {
    return div(className).position('absolute').bottom(0).left(0).height(100, '%').width(valueModel, '%')
}

export function vbar(valueModel, className = 'progress') {
    return div(className).position('absolute').bottom(0).left(0).width(100, '%').height(valueModel, '%')
}

export function progressBar(done, total, className = 'progress-bar') {
    return div(className).backgroundSize(on(done, total).apply((d, t) => ((t > 0) ? 100 * d / t : 0)), '%')
}