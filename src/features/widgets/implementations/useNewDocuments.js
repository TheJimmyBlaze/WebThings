import { useState, useCallback, useEffect, createElement } from 'react';
import { LineChart } from '@mui/x-charts';

export const documentsId = 'widget_new_documents';

export const useNewDocuments = () => {

    const title = "New Documents"
    const hint = "last 7 days"

    const [data, setData] = useState(null);

    const loading = useCallback(() => data == null, [data]);

    const load = useCallback(async () => {

        await new Promise(resolve => setTimeout(resolve, Math.random() * 3000));

        const fakeData = [];
        for(let i = 0; i < 7; i++) {
            fakeData.push(Math.floor(Math.random() * 10));
        }
        setData(fakeData);
    }, [
        setData
    ]);

    useEffect(() => {
        load();
    }, [load]);

    const render = () => {

        if (loading()) return;
        
        return createElement(
            LineChart,
            {
                key: documentsId,
                series: [{ 
                    curve: 'linear', 
                    data
                }],
                colors: ['orangered'],
                height: 200,
                leftAxis: null,
                sx: {
                    '.MuiLineElement-root': {
                        stroke: 'var(--bs-gray-600)',
                        strokeWidth: 3,
                    },
                    '.MuiMarkElement-root': {
                        scale: 0
                    },
                }
            }
        );
    };

    return {
        title,
        hint,
        loading,
        render
    };
};