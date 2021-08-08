module ComicsApi
  module V1
    module Adapters
      module Marvel
        module Models

          class ComicsParams

            attr_reader(:limit)
            attr_reader(:offset)
            attr_reader(:order_by)
            attr_reader(:characters_ids)

            def initialize(params)
              @limit = params.fetch(:limit)
              @offset = params.fetch(:offset)
              @order_by = params.fetch(:order_by)
              @characters_ids = params.fetch(:characters_ids)
            end

            def to_hash
              {
                limit: limit,
                offset: offset,
                orderBy: order_by,
                characters: @characters_ids
              }
            end

          end
        end
      end
    end
  end
end