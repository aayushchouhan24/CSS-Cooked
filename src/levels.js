const G = 'green', R = 'red', Y = 'yellow', D = 0
export const levels = [
    // Basic Levels (1–5): Justify-content and align-items basics
    {
        id: 1,
        items: [G, Y],
        styleMode: D,
        style: 'justify-content: center;',
        info: `<p>Center the circles horizontally using <code class="help">justify-content: center</code>.</p>`,
        lines: 1
    },
    {
        id: 2,
        items: [G, Y, R],
        styleMode: D,
        style: 'justify-content: space-between;',
        info: `<p>Distribute the circles evenly with <code class="help">justify-content: space-between</code>.</p>`,
        lines: 1
    },
    {
        id: 3,
        items: [G, R],
        styleMode: D,
        style: 'align-items: flex-start;',
        info: `<p>Align the circles to the top using <code class="help">align-items: flex-start</code>.</p>`,
        lines: 1
    },
    {
        id: 4,
        items: [G, Y, R],
        styleMode: D,
        style: 'justify-content: center; align-items: center;',
        info: `<p>Center the circles both horizontally and vertically using <code class="help">justify-content</code> and <code class="help">align-items</code>.</p>`,
        lines: 2
    },
    {
        id: 5,
        items: [G, Y],
        styleMode: D,
        style: 'align-items: baseline;',
        info: `<p>Align the circles to their baselines using <code class="help">align-items: baseline</code>.</p>`,
        lines: 1
    },

    // Intermediate Levels (6–15): Flex-direction and combinations
    {
        id: 6,
        items: [G, Y],
        styleMode: D,
        style: 'flex-direction: column; justify-content: center;',
        info: `<p>Arrange the circles in a column and center them vertically using <code class="help">flex-direction: column</code>.</p>`,
        lines: 2
    },
    {
        id: 7,
        items: [G, R],
        styleMode: D,
        style: 'flex-direction: row-reverse; justify-content: space-around;',
        info: `<p>Reverse the row direction and distribute the circles using <code class="help">justify-content: space-around</code>.</p>`,
        lines: 2
    },
    {
        id: 8,
        items: [G, Y, R],
        styleMode: D,
        style: 'flex-direction: column-reverse; align-items: flex-start;',
        info: `<p>Reverse the column direction and align the circles to the left using <code class="help">flex-direction: column-reverse</code>.</p>`,
        lines: 2
    },
    {
        id: 9,
        items: [G, Y, R],
        styleMode: D,
        style: 'justify-content: space-between; align-items: stretch;',
        info: `<p>Distribute the circles evenly horizontally and stretch them vertically.</p>`,
        lines: 2
    },
    {
        id: 10,
        items: [G, Y],
        styleMode: D,
        style: 'flex-direction: column; justify-content: space-evenly;',
        info: `<p>Arrange the circles in a column with equal spacing using <code class="help">justify-content: space-evenly</code>.</p>`,
        lines: 2
    },
    {
        id: 11,
        items: [G, R],
        styleMode: D,
        style: 'justify-content: flex-start; align-items: flex-end;',
        info: `<p>Align the circles to the left horizontally and to the bottom vertically.</p>`,
        lines: 2
    },
    {
        id: 12,
        items: [G, G, Y],
        styleMode: D,
        style: 'align-items: flex-start; justify-content: flex-end;',
        info: `<p>Align the circles to the right horizontally and the top vertically.</p>`,
        lines: 2
    },
    {
        id: 13,
        items: [G, Y, R],
        styleMode: D,
        style: 'align-items: center; justify-content: space-between;',
        info: `<p>Center the circles vertically and distribute them evenly horizontally.</p>`,
        lines: 2
    },
    {
        id: 14,
        items: [G, R, Y],
        styleMode: D,
        style: 'flex-direction: row-reverse; justify-content: flex-end;',
        info: `<p>Reverse the row direction and align the circles to the right horizontally.</p>`,
        lines: 2
    },
    {
        id: 15,
        items: [G, R],
        styleMode: D,
        style: 'flex-direction: column; align-items: baseline;',
        info: `<p>Arrange the circles in a column and align them to their baselines using <code class="help">align-items: baseline</code>.</p>`,
        lines: 2
    },

    // Advanced Levels (16–25): Adding wrapping and order
    {
        id: 16,
        items: [G, G, R, Y],
        styleMode: D,
        style: 'flex-wrap: wrap; justify-content: center;',
        info: `<p>Wrap the circles to the next row and center them horizontally.</p>`,
        lines: 2
    },
    {
        id: 17,
        items: [G, R, Y, G],
        styleMode: D,
        style: 'flex-wrap: wrap-reverse; align-items: flex-start;',
        info: `<p>Reverse the wrapping direction and align the circles to the top.</p>`,
        lines: 2
    },
    {
        id: 18,
        items: [G, R, Y, G, Y],
        styleMode: D,
        style: 'flex-wrap: wrap; justify-content: space-between;',
        info: `<p>Wrap the circles and distribute them evenly horizontally using <code class="help">justify-content: space-between</code>.</p>`,
        lines: 2
    },
    {
        id: 19,
        items: [G, Y, R],
        styleMode: D,
        style: 'order: 2; flex-direction: row;',
        info: `<p>Change the order of the circles to place <code class="help">yellow</code> last.</p>`,
        lines: 2
    },
    {
        id: 20,
        items: [G, G, R, Y, R],
        styleMode: D,
        style: 'align-items: stretch; justify-content: flex-start;',
        info: `<p>Stretch the circles vertically and align them to the left horizontally.</p>`,
        lines: 2
    },
    {
        id: 21,
        items: [G, Y, R],
        styleMode: D,
        style: 'flex-wrap: wrap; justify-content: space-evenly;',
        info: `<p>Wrap the circles and distribute them with equal spacing.</p>`,
        lines: 2
    },
    {
        id: 22,
        items: [G, R, Y, G],
        styleMode: D,
        style: 'flex-direction: column-reverse; justify-content: center;',
        info: `<p>Reverse the column direction and center the circles vertically.</p>`,
        lines: 2
    },
    {
        id: 23,
        items: [G, R, R, Y, G],
        styleMode: D,
        style: 'flex-wrap: wrap; align-items: baseline;',
        info: `<p>Wrap the circles and align them to their baselines using <code class="help">align-items: baseline</code>.</p>`,
        lines: 2
    },
    {
        id: 24,
        items: [G, Y, Y, R],
        styleMode: D,
        style: 'justify-content: space-between; align-items: flex-end;',
        info: `<p>Align the circles to the bottom vertically and distribute them evenly horizontally.</p>`,
        lines: 2
    },
    {
        id: 25,
        items: [G, R, Y, R],
        styleMode: D,
        style: 'flex-wrap: wrap-reverse; justify-content: center;',
        info: `<p>Reverse the wrapping direction and center the circles horizontally.</p>`,
        lines: 2
    }
]
