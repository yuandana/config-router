/**
 * 使用黑魔法将 react-router 的 history 暴露出来
 */
import { createRef } from 'react';

export const navigationRef = createRef();

export const nameMapperRef = createRef();

export const flatRoutesRef = createRef();
