import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { navigationRef, nameMapperRef } from '../root';
import { parsePath } from '../utils';

export const useNavigate = () => {
    const oldParams = useParams();

    /**
     *
     */
    const navigateBack = useCallback(() => {
        navigationRef?.current?.history?.goBack();
    }, []);

    /**
     *
     */
    const navigateTo = useCallback(
        (path, params) => {
            const nameMapper = nameMapperRef.current;
            const route = nameMapper.get(path) || {};
            const { fullPath } = route;
            const nextPath = parsePath(
                fullPath || path,
                { ...oldParams, ...params },
                true
            );
            if (!path) {
                throw new Error(
                    `You must specify a path to navigateTo function`
                );
            }
            if (nextPath) {
                navigationRef?.current?.history?.push(nextPath);
            }
        },
        [oldParams]
    );

    /**
     *
     */
    const redirectTo = useCallback(
        (path, params) => {
            const nameMapper = nameMapperRef.current;
            const route = nameMapper.get(path) || {};
            const { fullPath } = route;
            const nextPath = parsePath(
                fullPath || path,
                { ...oldParams, ...params },
                true
            );
            if (!path) {
                throw new Error(
                    `You must specify a path to navigateTo function`
                );
            }
            if (nextPath) {
                navigationRef?.current?.history?.replace(nextPath);
            }
        },
        [oldParams]
    );

    return {
        navigateBack,
        navigateTo,
        redirectTo
    };
};
