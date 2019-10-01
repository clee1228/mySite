
import { useSpring, animated } from 'react-spring';

const homeComponent = ()=> {
    const fade = useSpring({
        from: {opacity: 0},
        opacity: 1
    });

    // const props = useSpring({
    //     to: async (next, cancel) => {
    //       await next({opacity: 1, color: '#ffaaee'})
    //       await next({opacity: 0, color: 'rgb(14,26,19)'})
    //     },
    //     from: {opacity: 0, color: 'red'}
    //   })

    return <animated.div style={props}> I will fade in and out </animated.div>
        

    
}




