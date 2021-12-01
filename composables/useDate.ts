export default function useDate() {
    const today = (): Date => {
        return new Date()
    }

    function format(date: Date): string {
        return new Date(date).toDateString()
    }

    return {today, format}
}