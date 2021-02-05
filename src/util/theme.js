export const theme = {
    animations:{},
    breakpoints:{
        xs: '0',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px'
    },
    borders:{},
    colors:{
        text: 'hsl(0,0%,0%)',
        background: 'hsl(0,0%,100%)',
        primary: {
            main:'hsl(56deg 100% 49%)',
            dark:'hsl(56deg 100% 39%)',
            light:'hsl(56deg 100% 59%)'
        },
        secondary: {
            main:'hsl(339deg,100%,48%)',
            dark:'hsl(339deg,100%,38%)',
            light:'hsl(339deg,100%,58%)'
        },
        error:{
            main:'hsl(4deg,90%,58%)',
            dark:'hsl(4deg,90%,48%)',
            light:'hsl(4deg,90%,68%)'
        },
        warning:{
            main:'hsl(36deg,100%,50%)',
            dark:'hsl(36deg,100%,40%)',
            light:'hsl(36deg,100%,60%)'
        },
        info:{
            main:'hsl(207deg,90%,54%)',
            dark:'hsl(207deg,90%,44%)',
            light:'hsl(207deg,90%,64%)'
        },
        success:{
            main:'hsl(122deg,39%,49%)',
            dark:'hsl(122deg,39%,39%)',
            light:'hsl(122deg,39%,59%)'
        },
        grey:['hsl(0deg,0%,98%)','hsl(0deg,0%,96%)','hsl(0deg,0%,94%)','hsl(0deg,0%,92%)','hsl(0deg,0%,90%)','hsl(0deg,0%,88%)',
        'hsl(0deg,0%,84%)','hsl(0deg,0%,80%)','hsl(0deg,0%,76%)','hsl(0deg,0%,72%)','hsl(0deg,0%,68%)','hsl(0deg,0%,64%)',
        'hsl(0deg,0%,60%)','hsl(0deg,0%,56%)','hsl(0deg,0%,52%)','hsl(0deg,0%,48%)','hsl(0deg,0%,44%)','hsl(0deg,0%,40%)']
    },
    fonts:{
        body:'Helvetica',
        heading:'Helvetica'
    },
    fontSizes: [
        '12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px',
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    radii:['5px','10px','15px','20px','25px','30px','50%'],            
    shadows:{},
    sizes:['8px','16px','32px','64px','128px','256px','512px','1024px'],
    space:['auto','0px','2px','4px','8px','16px','32px','64px','128px','256px','512px','1024px']
}