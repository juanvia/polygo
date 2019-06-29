import React from 'react'
import { Typography } from '@material-ui/core'


export const SectionHeader = ({ title, pompadour }: { title: string, pompadour: string }) => <div>

    <Typography variant="h5" style={{ marginTop: 48 }}>
        {title}
    </Typography>

    <div>
        {pompadour}
    </div>

</div>

export default SectionHeader

