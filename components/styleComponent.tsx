import styled from 'styled-components'
// export const DropBox = styled.select`
//   /* Use Tailwind classes to style the drop box */
//   ${tw`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
// `;
export const NavButton = styled.button`
    display: flex;
    cursor : pointer;
    text-transform: none;
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    --tw-text-opacity : 1;
    color : rgba(41, 25, 44, var(--tw-text-opacity));
    font-weight: 700;
    font-size: .75rem;
    line-height: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    /* {props => props.$inputColor || "#BF4F74"}; */
    background-color: rgba(234,181,46, var(--tw-bg-opacity));
    transition-property : all;
    transition-timing-function : cubic-bezier(.4,0,.2,1);
    transition-duration : .15s;
    width: 100%;
    justify-content: center;


    &:hover,&:focus{
        --tw-bg-opacity : 1;
        --tw-text-opacity : 1;
        background-color : rgba(41,25,44, var(--tw-bg-opacity));
        color : rgba(234,181,46, var(--tw-text-opacity))
    }    
`
export const NavMobileButton = styled(NavButton)`
    background-color: transparent;
    color : white;
    border: 1px solid rgba(234,181,46, var(--tw-bg-opacity));
    &:focus{
        background-color: black;
        border:none;
    }
`
export const PickButton = styled.button`
    display: flex;
    cursor : pointer;
    border-radius: 0.5rem;
    /* color :  rgba(234,181,46, var(--tw-text-opacity)); */
    font-weight: 500;
    font-size: .95rem;
    line-height: 1rem;
    /* &:focus{
        background-color: rgba(234,181,46, var(--tw-text-opacity));
        color : rgba(41, 25, 44, var(--tw-text-opacity));
    } */
`