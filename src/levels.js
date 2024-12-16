const G = 'green', R = 'red', Y = 'yellow', D = 0
export const levels = [
    {
        id: 1,
        items: [G, Y],
        styleMode: D,
        style: 'justify-content: center;',
        info: `<p>Center the circles on the container using <code class="help">justify-content</code> in a flexbox layout.</p><p>Try to make sure they stay aligned in the middle.</p>`,
        lines: 1
    },
    {
        id: 2,
        items: [G, Y, R],
        styleMode: D,
        style: 'justify-content: space-evenly;',
        info: `<p>Position the circles evenly within the container using <code class="help">justify-content: space-evenly</code>. This should ensure equal spacing between the circles and the container edges.</p>`,
        lines: 1
    },
    {
        id: 3,
        items: [G],
        styleMode: D,
        style: 'align-items: center; justify-content: center;',
        info: `<p>Center the frog in the middle of the pond using both <code class="help">justify-content</code> and <code class="help">align-items</code>. Both horizontal and vertical centering are required here.</p>`,
        lines: 2
    },
    {
        id: 4,
        items: [G, Y, R],
        styleMode: D,
        style: 'flex-direction: row-reverse; justify-content: space-between;',
        info: `<p>Help the circles find their rings using <code class="help">flex-direction</code> and <code class="help">justify-content</code>. A reverse row layout and spacing them out will bring the desired effect.</p>`,
        lines: 2
    },
    {
        id: 5,
        items: [G, Y, R],
        styleMode: D,
        style: 'justify-content: space-around; align-items: flex-start; flex-direction: column;',
        info: `<p>Align the circles in a column, ensuring there is space between them and at the edges, by using <code class="help">flex-direction</code>, <code class="help">justify-content</code>, and <code class="help">align-items</code>.</p>`,
        lines: 3
    },
    {
        id: 6,
        items: [G, G, G, R, G],
        styleMode: R,
        style: 'order: -1;',
        info: `<p>Position the red frog in the correct order by using the <code class="help">order</code> property. This will help the frog jump to its lilypad.</p>`,
        lines: 1
    },
    {
        id: 7,
        items: [G, G, G, G, G, R, R, R, R, R, Y, Y, Y, Y, Y],
        styleMode: D,
        style: 'flex-direction: column; flex-wrap: wrap; align-items: center;',
        info: `<p>Help arrange the army of circles into three evenly spaced columns using <code class="help">flex-direction</code>, <code class="help">flex-wrap</code>, and <code class="help">align-items</code>. The circles should form a neat grid.</p>`,
        lines: 2
    },
    {
        id: 8,
        items: [R, G, G, G, G, Y, Y],
        styleMode: D,
        style: 'flex-flow: column-reverse wrap-reverse; justify-content: space-between; align-items: flex-start;',
        info: `<p>Bring the circles back into their positions with a combination of properties. You will need to adjust <code class="help">flex-flow</code>, <code class="help">justify-content</code>, and <code class="help">align-items</code> to get the circles into place.</p>`,
        lines: 3
    },
    {
        id: 9,
        items: [R, R, R, G, G, G, Y, Y, Y],
        styleMode: D,
        style: 'flex-flow: row wrap; align-items: center; justify-content: space-around;',
        info: `<p>To bring these circles to their correct positions, use a combination of <code class="help">flex-flow</code>, <code class="help">justify-content</code>, and <code class="help">align-items</code> to create a responsive layout.</p>`,
        lines: 3
    },
    {
        id: 10,
        items: [R, G, Y],
        styleMode: D,
        style: 'flex-wrap: wrap-reverse; justify-content: center; align-items: flex-end;',
        info: `<p>Help these three circles organize themselves using advanced flex properties like <code class="help">flex-wrap</code>, <code class="help">justify-content</code>, and <code class="help">align-items</code>.</p><p>Use <code class="help">wrap-reverse</code> to make the circles stack in reverse order.</p>`,
        lines: 3
    },
    {
        id: 11,
        items: [R, G, Y, G, Y],
        styleMode: D,
        style: 'flex-direction: column-reverse; place-content: space-between center; align-items: stretch;',
        info: `<p>This level requires you to apply a combination of properties like <code class="help">flex-direction</code>, <code class="help">place-content</code>, and <code class="help">align-items</code> to organize the circles in a neat manner.</p>`,
        lines: 4
    },
    {
        id: 12,
        items: [R, G, Y, Y, R, G, G],
        styleMode: D,
        style: 'flex-flow: row wrap; justify-content: space-evenly; align-items: baseline; align-content: stretch;',
        info: `<p>For this final challenge, combine all the layout techniques you've learned. Use a combination of <code class="help">flex-flow</code>, <code class="help">justify-content</code>, <code class="help">align-items</code>, and <code class="help">align-content</code> to align all circles perfectly.</p>`,
        lines: 4
    },
]
