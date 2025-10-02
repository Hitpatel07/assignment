/*
 * IObserver.ts
 * Defines the contract for any "Observer" class.
 */
export interface IObserver {
    // The method that the Subject will call to send an update.
    update(subjectState: any): void;
}