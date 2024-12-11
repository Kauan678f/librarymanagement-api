export default interface IResponseList<T> {
    ok: true,
    message?: any,
    data: T[],
}