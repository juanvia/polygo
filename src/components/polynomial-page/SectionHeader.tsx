import React from 'react'
import { Typography } from '@material-ui/core'


export const SectionHeader = ({ title, deck }: { title: string, deck: string }) => <div>

    <Typography variant="h5" style={{ marginTop: 48 }}>
        {title}
    </Typography>

    <div>
        {deck}
    </div>

</div>

export default SectionHeader

