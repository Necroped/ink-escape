const levels = ['ERROR', 'SUCCESS'] as const
type Level = typeof levels[number]