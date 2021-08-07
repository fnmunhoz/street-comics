module ComicsApi
  module V1
    module Adapters
      module Marvel
        class RequestAdapter

          def initialize(args = nil) end

          def comics(params)
            ComicsRequestAdapter.new(params).create
          end
        end
      end
    end
  end
end