module ComicsApi
  module V1
    module Adapters
      module Marvel
        class ResponseAdapter

          def initialize(args = nil) end

          def comics(response)
            ComicsResponseAdapter.new(response).create
          end

          def characters(response)
            CharactersResponseAdapter.new(response).create
          end
        end
      end
    end
  end
end