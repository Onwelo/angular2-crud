export const alertTypes = {
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger'
};

export interface IAlert {
    id?: number;
    type: string;
    message: string;
}
