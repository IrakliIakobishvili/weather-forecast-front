import { createMachine, assign } from 'xstate'
import { findCurrentDay } from '../services/helper';

interface Context {
  timelines: {
    minutely: object[]
  };
  location: object;
}

const context: Context = {
    timelines: {
        minutely: []
    },
    location: {

    }
};

export const fetchMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALAxAMQFEAVAYQAkBtABgF1FQAHAe1gEs1WmA7ekAD0QAWAEwAaEAE9EARmkA2AHQBOAOxyArCqrThSgMxLB6vQF8T41JiwKGYLhFZcoOCNzALHANyYBrd5ewbOwcnBC8mDABDDm5qGjjeZjYYniR+RD1dBWEqPR11cSkEAA5pBXUzC3RA23tHZzAAJ0amRpsAG2jkVoBbBQDrWpCoMK5vKJS4hLSk9k5U0AEETKVs3PzCmRVBBSM8wSphdWKVYqUqOTNzEC4mCDheAcSWOe5eJYBaOU2EL8qQAYeCDtMDPZLzd5CMSSLYqXZqTTaXQGPb-QFDepg14LdIIeTfGEIfTKBFaHT6QzGNHVaywACuGAwcHgMxeKUhCEEWgUBguRx+0ly2WEGjJyMppmugKaLUaWPZaSWXKoPPOcn5hOkKj0u2M0gORxOZwuVxMQA */
    id: "fetch",
    context: {
      data: context,
      payload: {},
      currentDate: null
    },
    initial: "idle",
    on: {
      FETCH: {
        target: "loading",
        actions: [
            assign({ data: (_, event: any) => context }),
            assign({ payload: (_, event: any) => event.payload })
        ]
      }
    },
    states: {
      idle: {},
      loading: {
        on: {
          FETCH: undefined
        },
        invoke: {
          src: "fetch",
          onDone: {
            target: "success",
            actions: "setData"
          },
          onError: {
            target: "error",
            actions: "assignErrorToContext"
          }
        }
      },
      success: {},
      error: {}
    }
  },
  {
    services: {
      fetch: async (context: any) => {
        const { payload } = context; 
        return (await fetch(`http://localhost:3000/weather/${payload.city}`)).json();
      }
    },
    actions: {
        setData: assign((context: any, event: any) => {
            const newData = event.data;
            return {
                ...context,
                data: newData,
                currentDate: findCurrentDay(event.data.timelines?.daily)
            };
      }),
      assignErrorToContext: assign((context:any, event: any) => {
        return {
          errorMessage: event.data?.message || 'An unknown error occurred',
        };
      }),
    }
  }
);