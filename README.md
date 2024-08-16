# ngx-dotpattern

`@omnedia/ngx-dotpattern` is an Angular library that provides a customizable dot pattern background effect for your Angular components. The component creates a pattern of dots across the background, with the color and styling easily configurable, making it an eye-catching visual element for your application.

## Features

- Dot pattern background with customizable color.
- Lightweight and easy to integrate as a standalone component.
- Suitable for adding decorative backgrounds to your Angular components.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-dotpattern
```

## Usage

Import the `NgxDotpatternComponent` in your Angular module or component:

```typescript
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';

@Component({
  ...
  imports: [
    ...
    NgxDotpatternComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-dotpattern
  [patternColor]="'#ffcc00'"
  styleClass="custom-pattern-class"
>
  <div>Your content here</div>
</om-dotpattern>
```

## API

```html
<om-dotpattern
  [patternColor]="patternColor"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-dotpattern>
```

- patternColor (optional): The color of the dot pattern. Accepts any valid CSS color value (e.g., '#ffcc00', rgba(255, 204, 0, 0.8)).
- styleClass (optional): A custom CSS class to apply to the component's wrapper element.

## Example

```html
<om-dotpattern
  [patternColor]="'#00ffcc'"
  styleClass="dotpattern-background"
>
  <div class="content">This is a dot pattern background effect</div>
</om-dotpattern>
```

This will create a dot pattern background with cyan-colored dots across the background of the component.

## Styling

To customize the appearance of the dot pattern or the container, use the styleClass input to apply your own CSS classes.

```css
.dotpattern-background {
  background-color: #000;
  height: 100vh;
  position: relative;
}

.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 50px;
}
```

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.