module ComicsApi
  module V1
    module Adapters
      module Marvel
        class ComicsRequestAdapter

          attr_reader(:params)

          def self.create(params)
            new(params).create
          end

          def initialize(params)
            @params = params
          end

          def create
            Models::ComicsParams.new(
              limit: create_limit,
              offset: create_offset,
              order_by: create_order_by,
              characters_ids: create_characters_ids,
            ).to_hash.filter { |_, v| v.present? }
          end

          private

          def create_limit
            params.fetch(:limit)
          end

          def create_offset
            params.fetch(:offset)
          end

          def create_order_by
            "#{order_by_direction}#{order_by_field}"
          end

          def create_characters_ids
            params.fetch(:characters_ids) { nil }
          end

          def order_by_field
            order_by_field = params.fetch(:order_by_field)

            order_by_field_map.fetch(order_by_field.to_sym)
          end

          def order_by_direction
            order_by_direction = params.fetch(:order_by_direction)

            order_by_direction_map.fetch(order_by_direction.to_sym)
          end

          def order_by_field_map
            {
              title: "title",
              releaseDate: "onsaleDate"
            }
          end

          def order_by_direction_map
            {
              asc: "",
              desc: "-"
            }
          end
        end
      end
    end
  end
end