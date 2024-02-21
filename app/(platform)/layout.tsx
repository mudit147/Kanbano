import { ClerkProvider } from "@clerk/nextjs";
const PlayformLayout = ({children,}: {
    children: React.ReactNode;
}) => {
    return ( <ClerkProvider>
        {children}
    </ClerkProvider> );
}
 
export default PlayformLayout;