const A = 'blue', B = 'orange', C = 'purple', D = 0

export const levels =
    [
        {
            "id": 1,
            "info": "<p>Welcome to Flexbox Fish Frenzy, a game where you help Fish and her friends by writing CSS code! Guide this fish to the fishbowl on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the fish to the right. </p",
            "style": "justify-content: flex-end;",
            "items": [A],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`
        },
        {
            "id": 2,
            "info": "<p>Use <code>justify-content</code> again to help these fishes get to their fishbowl. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>",
            "style": "justify-content: center;",
            "items": [A, B],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 3,
            "info": "<p>Help all three fishes find their fishbowl just by using <code>justify-content</code>. This time, the fishbowl have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</p>",
            "style": "justify-content: space-around;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 4,
            "info": "<p>Now the fishbowl on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the fishbowl have equal spacing between them.</p>",
            "style": "justify-content: space-between;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 5,
            "info": "<p>Now use <code>align-items</code> to help the fishes get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>",
            "style": "align-items: flex-end;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 6,
            "info": "<p>Lead the fish to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>",
            "style": "justify-content: center; align-items: center;",
            "items": [A],
            "styleMode": 0,
            "lines": 2,
            "deafultCss": `display:flex;`

        },
        {
            "id": 7,
            "info": "<p>The fishes need to cross the pond again, this time for some fishbowl with plenty of space around them. Use a combination of <code>justify-content</code> and <code>align-items</code>.</p>",
            "style": "justify-content: space-around; align-items: flex-end;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 2,
            "deafultCss": `display:flex;`

        },
        {
            "id": 8,
            "info": "<p>The fishes need to get in the same order as their fishbowl using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>",
            "style": "flex-direction: row-reverse;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 9,
            "info": "<p>Help the fishes find their column of fishbowl using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>",
            "style": "flex-direction: column;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 10,
            "info": "<p>Help the fishes get to their own fishbowl. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>",
            "style": "flex-direction: row-reverse; justify-content: flex-end;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 2,
            "deafultCss": `display:flex;`

        },
        {
            "id": 11,
            "info": "<p>Help the fishes find their fishbowl using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>",
            "style": "flex-direction: column; justify-content: flex-end;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 2,
            "deafultCss": `display:flex;`

        },
        {
            "id": 12,
            "info": "<p>Help the fishes find their fishbowl using <code>flex-direction</code> and <code>justify-content</code>.</p>",
            "style": "flex-direction: column-reverse; justify-content: space-between;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 2,
            "deafultCss": `display:flex;`

        },
        {
            "id": 13,
            "info": "<p>Help the fishes find their fishbowl using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>",
            "style": "flex-direction: row-reverse; justify-content: center; align-items: flex-end;",
            "items": [A, B, C],
            "styleMode": 0,
            "lines": 3,
            "deafultCss": `display:flex;`

        },
        {
            "id": 14,
            "info": "<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code>order</code> property to reorder the fishes according to their fishbowl.</p>",
            "styleMode": B,
            "style": "order: 2;",
            "items": [A, B, C],
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 15,
            "info": "<p>Use the <code>order</code> property to send the red fish to his fishbowl.</p>",
            "styleMode": C,
            "style": "order: -1;",
            "items": [A, A, A, C, A],
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 16,
            "info": "<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>",
            "styleMode": B,
            "style": "align-self: flex-end;",
            "items": [A, A, B, A, A],
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 17,
            "info": "<p>Combine <code>order</code> with <code>align-self</code> to help the fishes to their destinations.</p>",
            "styleMode": B,
            "style": "align-self: flex-end; order: 2;",
            "items": [B, A, B, A, A],
            "lines": 2,
            "deafultCss": `display:flex;`

        },
        {
            "id": 18,
            "info": "<p>Oh no! The fishes are all squeezed onto a single row of fishbowl. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>",
            "style": "flex-wrap: wrap;",
            "items": [B, A, A, A, A, A, C],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 19,
            "info": "<p>Help this army of fishes form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>",
            "style": "flex-direction: column; flex-wrap: wrap;",
            "items": [A, A, A, A, A, C, C, C, C, C, B, B, B, B, B],
            "styleMode": 0,
            "lines": 2,
            "deafultCss": `display:flex;`

        },
        {
            "id": 20,
            "info": "<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>",
            "style": "flex-flow: column wrap;",
            "items": [A, A, A, A, A, C, C, C, C, C, B, B, B, B, B],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;`

        },
        {
            "id": 21,
            "info": "<p>The fishes are spread all over the pond, but the fishbowl are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>",
            "style": "align-content: flex-start;",
            "items": [A, A, A, A, A, A, A, A, A, A, A, A, A, A, A],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;flex-wrap: wrap;`

        },
        {
            "id": 22,
            "info": "<p>Now the current has bunched the fishbowl at the bottom. Use <code>align-content</code> to guide the fishes there.</p>",
            "style": "align-content: flex-end;",
            "items": [A, A, A, A, A, A, A, A, A, A, A, A, A, A, A],
            "styleMode": 0,
            "lines": 1,
            "deafultCss": `display:flex;flex-wrap: wrap;`

        },
        {
            "id": 23,
            "info": "<p>The fishes have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their fishbowl.</p>",
            "style": "flex-direction: column-reverse; align-content: center;",
            "items": [C, A, A, A, B, C, A, A, A, B, C, A, A, A, B],
            "styleMode": 0,
            "lines": 2,
            "deafultCss": `display:flex;flex-wrap: wrap;`

        },
        {
            "id": 24,
            "info": "<p>Bring the fishes home one last time by using the CSS properties you've learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>",
            "style": "flex-direction: column-reverse; flex-wrap: wrap-reverse; align-content: space-between; justify-content: center;",
            "items": [C, A, A, A, A, B, B],
            "styleMode": 0,
            "lines": 4,
            "deafultCss": `display:flex;`

        }
    ]
