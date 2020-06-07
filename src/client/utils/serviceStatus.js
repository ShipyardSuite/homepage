export const serviceStatus = (status) =>
{
    switch(status)
    {
    case 'minor':
        return 'green';
    case 'major':
        return 'yellow';
    case 'critical':
        return 'red';
    default:
        return 'grey';
    }
};
