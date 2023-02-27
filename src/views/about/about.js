import React, { useState, useEffect } from "react";

import { Column } from '@ant-design/plots';

const About = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     asyncFetch();
    // }, []);

    // const asyncFetch = () => {
    //     fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => {
    //             console.log('fetch data failed', error);
    //         });
    // };

    // const config = {
    //     data,
    //     isStack: true,
    //     xField: 'year',
    //     yField: 'value',
    //     seriesField: 'type',
    //     label: {
    //         // 可手动配置 label 数据标签位置
    //         position: 'middle',
    //         // 'top', 'bottom', 'middle'
    //         // 可配置附加的布局方法
    //         layout: [
    //             // 柱形图数据标签位置自动调整
    //             {
    //                 type: 'interval-adjust-position',
    //             }, // 数据标签防遮挡
    //             {
    //                 type: 'interval-hide-overlap',
    //             }, // 数据标签文颜色自动调整
    //             {
    //                 type: 'adjust-color',
    //             },
    //         ],
    //     },
    // };




    const data = [
        {
          action: '浏览网站',
          pv: 50000,
        },
        {
          action: '放入购物车',
          pv: 35000,
        },
        {
          action: '生成订单',
          pv: 25000,
        },
        {
          action: '支付订单',
          pv: 15000,
        },
        {
          action: '完成交易',
          pv: 8500,
        },
      ];
      const config = {
        data,
        xField: 'action',
        yField: 'pv',
        conversionTag: {},
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
      };


    return <Column {...config} />;
}
export default About