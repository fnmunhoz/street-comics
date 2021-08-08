module ComicsApi
  module V1
    module Adapters
      module Marvel
        module Models

          class CharactersParams

            attr_reader(:limit)
            attr_reader(:offset)
            attr_reader(:order_by)

            def initialize(params)
              @limit = params.fetch(:limit)
              @offset = params.fetch(:offset)
              @order_by = params.fetch(:order_by)
            end

            def to_hash
              {
                limit: limit,
                offset: offset,
                orderBy: order_by
              }
            end

          end
        end
      end
    end
  end
end