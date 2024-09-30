import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "./index.tsx";

// 测试基本按钮样式
describe("Button component basic styles", () => {
  it("should render a default button", () => {
    const { getByRole } = render(<Button />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  // it('should render a disabled button', () => {
  //   const { getByRole } = render(<Button disabled />);
  //   expect(getByRole('button')).toBeDisabled();
  // });

  // it('should render a link button', () => {
  //   const { getByRole } = render(<Button link />);
  //   expect(getByRole('link')).toBeInTheDocument();
  // });

  // it('should render a text button', () => {
  //   const { getByRole } = render(<Button text />);
  //   expect(getByRole('button')).toHaveClass('text-button-class'); // 替换为你的文本按钮类名
  // });

  // it('should render an icon button', () => {
  //   const { getByRole } = render(<Button icon="icon-class" />);
  //   expect(getByRole('img')).toBeInTheDocument();
  // });

  // it('should render a button group', () => {
  //   const { getByRole } = render(
  //     <Button.Group>
  //       <Button />
  //       <Button />
  //     </Button.Group>
  //   );
  //   expect(getByRole('group')).toBeInTheDocument();
  // });

  // it('should render a loading button', () => {
  //   const { getByRole } = render(<Button loading />);
  //   expect(getByRole('progressbar')).toBeInTheDocument();
  // });
});

// // 测试尺寸调整
// describe('Button component sizes', () => {
//   it('should render a large button', () => {
//     const { getByRole } = render(<Button size="large" />);
//     expect(getByRole('button')).toHaveClass('large-button-class'); // 替换为你的大按钮类名
//   });

//   it('should render a small button', () => {
//     const { getByRole } = render(<Button size="small" />);
//     expect(getByRole('button')).toHaveClass('small-button-class'); // 替换为你的小按钮类名
//   });
// });

// // 测试自定义颜色
// describe('Button component custom color', () => {
//   it('should have a custom color', () => {
//     const { getByRole } = render(<Button color="#ff0000" />);
//     expect(getByRole('button')).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
//   });
// });

// // 测试暗色模式
// describe('Button component dark mode', () => {
//   it('should support dark mode', () => {
//     const { getByRole } = render(<Button dark />);
//     expect(getByRole('button')).toHaveClass('dark-button-class'); // 替换为你的暗色模式按钮类名
//   });
// });

// // 测试自定义元素标签
// describe('Button component custom tag', () => {
//   it('should support custom element tag', () => {
//     const { getByRole } = render(<Button tag="a" />);
//     expect(getByRole('link')).toBeInTheDocument();
//   });
// });

// // 测试国际化
// describe('Button component internationalization', () => {
//   it('should support internationalization', () => {
//     // 假设你有一个国际化的上下文或提供者
//     // render your component within the provider with different locale
//     const { getByText } = render(<Button />, { locale: 'fr' });
//     expect(getByText('FRButtonText')).toBeInTheDocument();
//   });
// });

// // 测试交互关系
// describe('Button component interactions', () => {
//   it('should trigger an event on click', () => {
//     const handleClick = vi.fn();
//     const { getByRole } = render(<Button onClick={handleClick} />);
//     fireEvent.click(getByRole('button'));
//     expect(handleClick).toHaveBeenCalled();
//   });

//   it('should not trigger an event on disabled button click', () => {
//     const handleClick = vi.fn();
//     const { getByRole } = render(<Button disabled onClick={handleClick} />);
//     fireEvent.click(getByRole('button'));
//     expect(handleClick).not.toHaveBeenCalled();
//   });
// });

// // 测试异常处理
// describe('Button component error handling', () => {
//   it('should show warning for invalid props', () => {
//     // 你需要模拟一个console.error来捕获警告信息
//     const warn = vi.warn(console, 'warn');
//     render(<Button invalidProp />);
//     expect(warn).toHaveBeenCalledWith('Invalid prop `invalidProp` supplied to `Button`, expected one of [types...].');
//   });
// });
