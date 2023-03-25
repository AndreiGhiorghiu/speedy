import React, {ReactNode, useState} from 'react';
import {useIsFetching} from 'react-query';

interface Props {
    children: ReactNode;
}

export default function Panel(props: Props) {
    const fetchingQueries = !!useIsFetching({
        predicate: (query) => query.state.status === 'loading',
    });

    return (
        <>
            <div
                className="main-content"
                style={{overflowY: 'scroll', maxHeight: 'calc(100vh - 110px)'}}
            >
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div>{(!fetchingQueries && null) || props.children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
